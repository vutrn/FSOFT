import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, ListGroup, Modal, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { createAlbum, deleteAlbum, getAlbums, getUser, updateUser, type Album, type User } from '../services/api';

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Edit Modal State
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    email: '',
    phone: '',
    website: ''
  });

  // Add Album State
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [addingAlbum, setAddingAlbum] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;
      try {
        const [userData, albumsData] = await Promise.all([
          getUser(Number(userId)),
          getAlbums(Number(userId))
        ]);
        setUser(userData);
        setAlbums(albumsData);
        setEditFormData({
          email: userData.email,
          phone: userData.phone,
          website: userData.website
        });
      } catch (err) {
        setError('Failed to fetch user details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleEditSubmit = async () => {
    if (!user) return;
    try {
      await updateUser(user.id, editFormData);
      // Optimistically update UI
      setUser({ ...user, ...editFormData });
      setShowEditModal(false);
      alert('User updated successfully (simulated)');
    } catch (err) {
      console.error('Failed to update user', err);
      alert('Failed to update user');
    }
  };

  const handleAddAlbum = async () => {
    if (!user || !newAlbumTitle.trim()) return;
    setAddingAlbum(true);
    try {
      const newAlbum = await createAlbum({ userId: user.id, title: newAlbumTitle });
      // JSONPlaceholder returns id 101 for new items, so we might have duplicates if we add multiple.
      // For simulation, we can just append it.
      setAlbums([...albums, newAlbum]);
      setNewAlbumTitle('');
    } catch (err) {
      console.error('Failed to add album', err);
      alert('Failed to add album');
    } finally {
      setAddingAlbum(false);
    }
  };

  const handleDeleteAlbum = async (albumId: number) => {
    if (!window.confirm('Are you sure you want to delete this album?')) return;
    try {
      await deleteAlbum(albumId);
      setAlbums(albums.filter(a => a.id !== albumId));
    } catch (err) {
      console.error('Failed to delete album', err);
      alert('Failed to delete album');
    }
  };

  if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
  if (error || !user) return <Container className="mt-5"><Alert variant="danger">{error || 'User not found'}</Alert></Container>;

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Header>User Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>ID:</strong> {user.id}</ListGroup.Item>
              <ListGroup.Item><strong>Name:</strong> {user.name}</ListGroup.Item>
              <ListGroup.Item><strong>Username:</strong> {user.username}</ListGroup.Item>
              <ListGroup.Item><strong>City:</strong> {user.address.city}</ListGroup.Item>
              <ListGroup.Item><strong>Company:</strong> {user.company.name}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>Contact Information</span>
              <Button variant="primary" size="sm" onClick={() => setShowEditModal(true)}>Edit</Button>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
              <ListGroup.Item><strong>Phone:</strong> {user.phone}</ListGroup.Item>
              <ListGroup.Item><strong>Website:</strong> {user.website}</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card>
            <Card.Header>Photo Albums</Card.Header>
            <Card.Body>
              <div className="d-flex mb-3">
                <Form.Control
                  type="text"
                  placeholder="New Album Title"
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                  className="me-2"
                />
                <Button variant="success" onClick={handleAddAlbum} disabled={addingAlbum}>
                  {addingAlbum ? 'Adding...' : 'Add Album'}
                </Button>
              </div>
              <ListGroup>
                {albums.map((album, index) => (
                  <ListGroup.Item key={album.id} className="d-flex justify-content-between align-items-center">
                    <span>{index + 1}. {album.title} (ID: {album.id})</span>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteAlbum(album.id)}>X</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={editFormData.phone}
                onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                value={editFormData.website}
                onChange={(e) => setEditFormData({ ...editFormData, website: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleEditSubmit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserDetailsPage;

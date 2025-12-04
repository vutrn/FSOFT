import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { getPhotos, type Photo } from '../services/api';

const PhotoPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [albumIdSearch, setAlbumIdSearch] = useState<string>('');
  const [hasMore, setHasMore] = useState<boolean>(true);

  const LIMIT = 12;

  const fetchPhotosData = async (reset: boolean = false) => {
    setLoading(true);
    try {
      const start = reset ? 0 : page * LIMIT;
      const albumId = albumIdSearch ? Number(albumIdSearch) : undefined;

      const newPhotos = await getPhotos(start, LIMIT, albumId);

      if (reset) {
        setPhotos(newPhotos);
        setPage(1);
      } else {
        setPhotos(prev => [...prev, ...newPhotos]);
        setPage(prev => prev + 1);
      }

      if (newPhotos.length < LIMIT) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (err) {
      setError('Failed to fetch photos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchPhotosData(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPhotosData(true);
  };

  const handleLoadMore = () => {
    fetchPhotosData(false);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Photos</h2>

      <Form onSubmit={handleSearch} className="mb-4">
        <InputGroup>
          <Form.Control
            type="number"
            placeholder="Search by Album ID"
            value={albumIdSearch}
            onChange={(e) => setAlbumIdSearch(e.target.value)}
          />
          <Button variant="primary" type="submit">Search</Button>
        </InputGroup>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row xs={1} md={2} lg={4} className="g-4">
        {photos.map((photo) => (
          <Col key={`${photo.id}-${photo.albumId}`}>
            <Card className="h-100">
              <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
              <Card.Body>
                <Card.Title className="fs-6 text-truncate" title={photo.title}>
                  {photo.title}
                </Card.Title>
                <Card.Text className="small text-muted">
                  ID: {photo.id} | Album: {photo.albumId}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {!loading && hasMore && (
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={handleLoadMore}>Load More</Button>
        </div>
      )}

      {!loading && !hasMore && photos.length > 0 && (
        <div className="text-center mt-4 text-muted">
          No more photos to load.
        </div>
      )}

      {!loading && photos.length === 0 && (
        <div className="text-center mt-4">
          No photos found.
        </div>
      )}
    </Container>
  );
};

export default PhotoPage;

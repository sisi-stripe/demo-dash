interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div
      className="p-4 rounded-lg border border-gray-200 bg-white flex flex-col h-full"
      style={{ flex: '1 1 0' }}
    >
      <h3 className="text-label-emphasized">{title}</h3>
      <p className="text-body-small" style={{ color: 'var(--text-subdued, #596171)' }}>
        {description}
      </p>
      <div
        className="image-div"
        style={{
          display: 'flex',
          padding: '20px 0 0 18px',
          marginTop: '12px',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignSelf: 'stretch',
          flex: 1,
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
        }}
      />
    </div>
  );
}

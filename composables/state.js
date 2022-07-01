export const useCloudinary = () => {
  return useState('cloudindary', () => {
    return {
      url: 'https://res.cloudinary.com',
      cloudName: 'zahn-und-sthetik',
      part: 'image/upload',
      folder: 'website',
    };
  });
};

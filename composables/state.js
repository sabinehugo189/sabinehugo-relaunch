export const useCloudinary = () => {
  return useState('cloudindary', () => {
    return {
      url: 'https://res.cloudinary.com',
      cloudName: 'zahn-und-sthetik',
      part: 'image/upload',
      id: 'v1652359235',
      folder: 'invisalign',
    };
  });
};

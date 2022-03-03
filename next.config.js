module.exports = {
  env: {
    CONNECTION_URL: `mongodb+srv://pat123:pat123@cluster0.nqxrk.mongodb.net/newsletter?retryWrites=true &
w=majority`,
    SENDER: 'oldhumblelion@gmail.com',
    MP: 'Humblelion',
    REC: 'virgile.dokouvi@gmail.com',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = ({ env }) => ({
    // Update here your cloudinary cloud_name, api_key & api_secret
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: "dh1x27sjf",
          api_key: "936512188763199",
          api_secret: "sEr5nSuIqGxwOt7fbrBtVV-WVxs",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d',
          jwtSecret: env('JWT_SECRET'),
        },
      },
    },
  });

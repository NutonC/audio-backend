module.exports = ({ env }) => ({
    // ...
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          notificatoin: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },
    // ...
  });
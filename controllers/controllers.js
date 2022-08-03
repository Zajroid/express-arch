export const mainController = (req, res) => {
  res.render('index', { title: 'This main', active: 'main' });
};

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pulsatio' });
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('external/start');
});

/* GET admin page */
router.get('/admin', function(req, res, next) {
  res.render('admin/admin_portal', { title: 'Portal Administrativo'} )
});

/* GET medicos page */
router.get('/show_medicos', function(req, res, next) {
  res.render('admin/medicos/show_medicos', { title: 'M&eacute;dicos' } )
});

/* GET cedes hospitalarias page */
router.get('/show_cedes', function(req, res, next) {
  res.render('admin/cedes_hospitalarias/show_cedes', { title: 'Cedes Hospitalarias' } )
});

/* GET universidades page */
router.get('/show_universidades', function(req, res, next) {
  res.render('admin/universidades/show_universidades', { title: 'Universidades' } )
});

/* GET universidades page */
router.get('/dashboard', function(req, res, next) {
  res.render('internal/dashboard', { title: 'Dashboard', avg: '', rng: '' } )
});

/* GET privacy policy */
router.get('/privacy', function(req, res, next) {
  res.render('legal/licencing', { title: 'Aviso de Privacidad' })
});

/* GET profile page */
router.get('/internal/profile', function(req, res, next) {
  res.render('/profile')
});

module.exports = router;

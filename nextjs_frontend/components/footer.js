export default function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          Le bonne<span>place</span>
        </h3>

        <p class="footer-links">
          <a href="#">Accueil</a>·<a href="#">Article</a>·<a href="#">Contact</a>·
        </p>

        <p class="footer-company-name">labonneplace &copy; 2021</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>5 rue des olivettes</span> Nantes, France
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+33 776356439</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:labonneplace@hotmail.fr">contact@labonneplace.fr</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>A propos du site</span>
          Web Dev Trick is a blog for web designers, graphic designers, web
          developers &amp; SEO Learner.
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export const codeSnippets = {
  one: `<div class="container">
  <div class="page-wrapper">
    <div class="featured">
      <h1>About us</h1>

      <div class="subheading">
        <h4>
          <a href="#">My subheading</a>
        </h4>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <div class="description">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam.
          </p>          
        </div>

        <div class="sidebar">
          <h1>About us</h1>

          <div class="subheading">
            <h4>
              <a href="#">My subheading</a>
            </h4>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>`,
  two: `$off-white: #f6f6f6;
$featured-color: DarkRed;

body {
  background-color: $off-white;
  height: 100vh;
  height: 100vw;
}

.container {
  font-family: Verdana;
  font-size: 0.8rem;
}

.page-wrapper { 
  padding: 21px;
  $featured-color: RoyalBlue;

  .featured {
    color: Tomato;
    .subheading a {
      color: LightSteelBlue;
      text-decoration: none;
      &:hover {
        color: LightSkyBlue;
        text-decoration: underline;
      }
    }
  }

  .page-content {
    background-color: $featured-color;
    padding: 42px;
    color: $off-white;

    .container {
      height: 60px !important;
      font-family: courier;

      .description {
        float: left;
        width: 75%;
      }

      .sidebar {
        font-family: Verdana;
        text-align: right;
        float: right;
        width: 25%;
        color: Tomato;
        .subheading a {
          color: LightSteelBlue;
          text-decoration: none;
          &:hover {
            color: LightSkyBlue;
            text-decoration: underline;
          }
        }
      }
    }
  }
}`,
};

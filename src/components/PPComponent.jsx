import React from "react";

const PPComponent = ({ setContentToggle }) => {
  return (
    <div className="TOU-section">
      <div className="TOU-container">
        <h1>Privacy Policy</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis
          parturient montes nascetur ridiculus mus. Porta lorem mollis aliquam
          ut porttitor leo. At quis risus sed vulputate odio ut. Tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada proin libero. Vitae
          congue eu consequat ac felis donec et odio. Libero nunc consequat
          interdum varius sit amet. Commodo nulla facilisi nullam vehicula.
          Suspendisse in est ante in. Hendrerit dolor magna eget est lorem ipsum
          dolor. Consectetur lorem donec massa sapien faucibus et. Mauris
          pharetra et ultrices neque ornare. Ut lectus arcu bibendum at.
          Volutpat blandit aliquam etiam erat velit scelerisque in dictum non.
        </p>

        <p>
          Interdum velit euismod in pellentesque massa placerat duis. Accumsan
          tortor posuere ac ut. Diam quis enim lobortis scelerisque fermentum
          dui. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.
          Hendrerit dolor magna eget est lorem ipsum. Posuere lorem ipsum dolor
          sit. Vel turpis nunc eget lorem dolor sed viverra ipsum. Scelerisque
          in dictum non consectetur a erat. Elit duis tristique sollicitudin
          nibh sit amet commodo. Faucibus scelerisque eleifend donec pretium
          vulputate sapien nec sagittis aliquam. Id consectetur purus ut
          faucibus pulvinar. Ipsum nunc aliquet bibendum enim facilisis gravida
          neque convallis a. Congue quisque egestas diam in arcu cursus euismod
          quis viverra. Sit amet risus nullam eget felis eget nunc lobortis.
        </p>

        <p>
          Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tincidunt
          lobortis feugiat vivamus at. Facilisis magna etiam tempor orci eu. In
          arcu cursus euismod quis viverra nibh cras pulvinar. Non quam lacus
          suspendisse faucibus interdum posuere lorem ipsum dolor. Nam at lectus
          urna duis convallis convallis tellus id interdum. Aliquet enim tortor
          at auctor urna nunc id cursus. At lectus urna duis convallis
          convallis. Aliquam id diam maecenas ultricies mi. A diam maecenas sed
          enim. Diam vulputate ut pharetra sit amet aliquam id diam maecenas.
          Sit amet cursus sit amet dictum. Morbi enim nunc faucibus a
          pellentesque. Semper viverra nam libero justo laoreet. Cursus vitae
          congue mauris rhoncus aenean. Et netus et malesuada fames. Mauris a
          diam maecenas sed. Adipiscing commodo elit at imperdiet.
        </p>
      </div>

      <div className="single-button-container">
        <div
          className="sign-btn"
          onClick={() => setContentToggle(1)}
        >
          <p>Get back</p>
        </div>
      </div>
    </div>
  );
};

export default PPComponent;

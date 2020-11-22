'use strict'

let homePage = `

  <div class="home-page">
    <div class="home-page-content">
      My 2021 lunar calendar is in production!
      Follow <a class="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram
      and join my <a class="text-link" href="about.html">email list</a> to receive first word when the prints are ready.
      They'll be available as shipped orders here (and also at a few small shops in Rhode Island).<BR>&ndash; Alec
    </div>
  </div>
`;

const itemCreate = (pageValue) => {
  return pageValue;
};

export default {
  homePage,
  itemCreate
};

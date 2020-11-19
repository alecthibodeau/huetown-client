'use strict'

let homePage = `

  <div class="home-page">
    <div class="content">
      <div class="lunar-calendar-available">
        <div>
          My 2021 lunar calendar is in production! Follow <a class="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram and join my <a class="text-link" href="about.html">email list</a> to receive first word when the prints are ready. They'll be available here as shipped orders&#8230; and also at a few shops.
        </div>
      </div>
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

# Huetown site

## Summary

[Huetown.com](https://alecthibodeau.com) is a website and shop for my recent art projects: primarily print editions available for online sale with shipping. The site consumes a PayPal API so customers can place orders via PayPal balances or credit card payments.

## Description

The site is a multi-page application I build and maintain with vanilla JavaScript. This architecture approximates a single-page application (SPA) in that there is a discrete group of reuseable, component-like JavaScript files, making the code more DRY. These JS files then load content as needed within the empty `<body>` tags of the site's HTML pages.

## Responsiveness

Recent data reports from PayPal indicate a significant number of customers are visting and ordering from this site on mobile devices: "Payments received by device" are 80% mobile and 20% web/desktop. Responsiveness is thus critical. I use breakpoints and media queries to display the content properly in any viewport width. I also include a custom hamburger menu for quick menu access on smaller screens.

## Styling

I'm using [Sass](https://sass-lang.com) as a CSS preprocessor.

<br>

Software and content Copyright (C) Alec Thibodeau.
Copyright year is by commit date.

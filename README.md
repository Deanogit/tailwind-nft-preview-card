# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

- I'm going to predict this challenge will take me 4-6hrs to complete starting @ 10.45am 18/12/23

- Project is complete and I'm ahead of schedule 12:02 18/12/23 thats great!

### Links

- Solution URL: [GitHub](https://github.com/Deanogit/tailwind-nft-preview-card)
- Live Site URL: [Live Site](https://tailwind-nft-dean.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox
- Mobile-first workflow

### What I learned

The trickiest part of this project was implementing the hover transparency and icon over the main image. Here's how I did it...

```
<div
        class="active flex mb-6 rounded-lg z-10 w-full h-full relative cursor-pointer group"
      >
        <div
          class="active-bg absolute top-0 bottom-0 right-0 left-0 bg-fm-cyan/50 rounded-lg justify-center items-center hidden group-hover:flex"
        >
          <img src="images/icon-view.svg" alt="" />
        </div>
        <img
          src="images/image-equilibrium.jpg"
          alt="transparent cube glowing red and blue"
          width="278"
          height="278"
          class="rounded-lg md:w-[302px] md:h-[302px]"
        />
      </div>
```

## Author

- Website - [Dean Howe](https://www.deanhowe.dev)
- Frontend Mentor - [@Deanogit](https://www.frontendmentor.io/profile/Deanogit)

## Acknowledgments

[Brad Traversy's TailwindCSS course on Udemy](https://www.udemy.com/course/tailwind-from-scratch/)

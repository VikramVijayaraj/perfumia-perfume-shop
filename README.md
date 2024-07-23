<!-- <p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p> -->
<p align="center">
    <h1 align="center"><img src="./client/public/perfumia.png" />PERFUMIA</h1>
</p>
<p align="center">
    <em><code>► A Perfume Shop</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/VikramVijayaraj/perfumia-perfume-shop.git?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/VikramVijayaraj/perfumia-perfume-shop.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/VikramVijayaraj/perfumia-perfume-shop.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/VikramVijayaraj/perfumia-perfume-shop.git?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/CSS3-E34F28.svg?style=flat&logo=CSS3&logoColor=white" alt="CSS">
	<img src="https://img.shields.io/badge/node-white?logo=nodedotjs" alt="Node">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running perfumia-perfume-shop](#-running-perfumia-perfume-shop)
> - [🛠 Project Live On](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 Screenshots](#-license)
> - [👏 Feedbacks](#-acknowledgments)

---

## 📍 Overview

[Perfumia](https://perfumia-client.vercel.app/) is an online perfume shop that showcases beautiful user interfaces and seamless navigation between each routes. The project is built as a full-stack web application with a clear separation between the frontend and backend, leveraging modern web development technologies to provide a robust and user-friendly platform.

---

## 📦 Features

**User-Friendly Interface**: The frontend is designed to focus on aesthetics and usability, ensuring an enjoyable shopping experience.

- **Comprehensive Product Listings**: Displays a wide range of perfumes with detailed descriptions, categories, and images.
- **Responsive Design**: Ensures the application is accessible and usable across various devices, including desktops, tablets, and mobile phones.
- **Performance Optimizations**: Built with performance in mind, using modern frontend tools like Vite and Tailwind CSS, and a backend powered by Node.js and Express.
- **Scalable Backend**: Utilizes MongoDB for a scalable and flexible database solution that is suitable for handling a growing number of products and users.

---

## 📂 Repository Structure

```sh
└── perfumia-perfume-shop/
    ├── README.md
    ├── client
    │   ├── .eslintrc.cjs
    │   ├── README.md
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   └── perfumia.png
    │   ├── src
    │   │   ├── assets
    │   │   │   ├── icons
    │   │   │   │   ├── close.svg
    │   │   │   │   ├── facebook.png
    │   │   │   │   ├── instagram.png
    │   │   │   │   ├── menu.svg
    │   │   │   │   └── x.png
    │   │   │   └── images
    │   │   │       └── avatar.png
    │   │   ├── components
    │   │   │   ├── AddToCart.jsx
    │   │   │   ├── Banner.jsx
    │   │   │   ├── Card.jsx
    │   │   │   ├── ContactForm.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── NavBar.jsx
    │   │   │   ├── NotFoundPage.jsx
    │   │   │   ├── ProductEntry.jsx
    │   │   │   ├── ProductGallery.jsx
    │   │   │   ├── ProductOptions.jsx
    │   │   │   ├── ProductReview.jsx
    │   │   │   └── ProductsList.jsx
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   └── pages
    │   │       ├── AboutPage.jsx
    │   │       ├── CategoriesPage.jsx
    │   │       ├── ContactPage.jsx
    │   │       ├── HomePage.jsx
    │   │       └── ProductPage.jsx
    │   ├── tailwind.config.js
    │   └── vite.config.js
    └── server
        ├── data
        │   ├── productsData.js
        │   └── teamData.js
        ├── index.js
        ├── models
        │   ├── Product.js
        │   ├── Review.js
        │   └── Team.js
        ├── package-lock.json
        ├── package.json
        └── vercel.json
```

<!-- --- -->
<!--
## 🧩 Modules

<details closed><summary>client</summary>

| File                                                                                                                     | Summary                         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| [index.html](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/index.html)                 | <code>► INSERT-TEXT-HERE</code> |
| [postcss.config.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/postcss.config.js)   | <code>► INSERT-TEXT-HERE</code> |
| [vite.config.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/vite.config.js)         | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/package.json)             | <code>► INSERT-TEXT-HERE</code> |
| [.eslintrc.cjs](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/.eslintrc.cjs)           | <code>► INSERT-TEXT-HERE</code> |
| [tailwind.config.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/tailwind.config.js) | <code>► INSERT-TEXT-HERE</code> |
| [package-lock.json](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/package-lock.json)   | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>client.src</summary>

| File                                                                                                       | Summary                         |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [index.css](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/index.css) | <code>► INSERT-TEXT-HERE</code> |
| [main.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/main.jsx)   | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>client.src.pages</summary>

| File                                                                                                                               | Summary                         |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [HomePage.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/pages/HomePage.jsx)             | <code>► INSERT-TEXT-HERE</code> |
| [ProductPage.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/pages/ProductPage.jsx)       | <code>► INSERT-TEXT-HERE</code> |
| [CategoriesPage.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/pages/CategoriesPage.jsx) | <code>► INSERT-TEXT-HERE</code> |
| [ContactPage.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/pages/ContactPage.jsx)       | <code>► INSERT-TEXT-HERE</code> |
| [AboutPage.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/pages/AboutPage.jsx)           | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>client.src.components</summary>

| File                                                                                                                                    | Summary                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [ContactForm.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/ContactForm.jsx)       | <code>► INSERT-TEXT-HERE</code> |
| [ProductReview.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/ProductReview.jsx)   | <code>► INSERT-TEXT-HERE</code> |
| [NavBar.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/NavBar.jsx)                 | <code>► INSERT-TEXT-HERE</code> |
| [ProductOptions.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/ProductOptions.jsx) | <code>► INSERT-TEXT-HERE</code> |
| [ProductGallery.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/ProductGallery.jsx) | <code>► INSERT-TEXT-HERE</code> |
| [Card.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/Card.jsx)                     | <code>► INSERT-TEXT-HERE</code> |
| [Banner.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/Banner.jsx)                 | <code>► INSERT-TEXT-HERE</code> |
| [Footer.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/Footer.jsx)                 | <code>► INSERT-TEXT-HERE</code> |
| [AddToCart.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/AddToCart.jsx)           | <code>► INSERT-TEXT-HERE</code> |
| [NotFoundPage.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/NotFoundPage.jsx)     | <code>► INSERT-TEXT-HERE</code> |
| [ProductsList.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/ProductsList.jsx)     | <code>► INSERT-TEXT-HERE</code> |
| [ProductEntry.jsx](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/client/src/components/ProductEntry.jsx)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>server</summary>

| File                                                                                                                   | Summary                         |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [package.json](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/package.json)           | <code>► INSERT-TEXT-HERE</code> |
| [index.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/index.js)                   | <code>► INSERT-TEXT-HERE</code> |
| [package-lock.json](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/package-lock.json) | <code>► INSERT-TEXT-HERE</code> |
| [vercel.json](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/vercel.json)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>server.models</summary>

| File                                                                                                            | Summary                         |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [Product.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/models/Product.js) | <code>► INSERT-TEXT-HERE</code> |
| [Review.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/models/Review.js)   | <code>► INSERT-TEXT-HERE</code> |
| [Team.js](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/master/server/models/Team.js)       | <code>► INSERT-TEXT-HERE</code> |

</details> -->

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **Node.js**
- **npm**

### ⚙️ Installation

1. Clone the perfumia-perfume-shop repository:

```sh
git clone https://github.com/VikramVijayaraj/perfumia-perfume-shop.git
```

2. Change to the project directory:

```sh
cd perfumia-perfume-shop
```

3. Install the dependencies:

```sh
cd server/
npm install
```

```sh
cd client/
npm install
```

### 🤖 Running perfumia-perfume-shop

Use the following command to run perfumia-perfume-shop:

```sh
cd server/
npm run dev
```

```sh
cd client/
npm run dev
```

---

## 🛠 Project Live On

[Perfumia](https://perfumia-client.vercel.app/) 🚀

---

## 🤝 Contributing

Contributions are welcome!

<!--
- **[Submit Pull Requests](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/VikramVijayaraj/perfumia-perfume-shop.git/issues)**: Submit bugs found or log feature requests for Perfumia-perfume-shop.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/VikramVijayaraj/perfumia-perfume-shop.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details> -->

---

## 🖼️ Screenshots

- Landing Page:
  ![Perfumia_UI](/screenshots/home.png)

- Landing Page:
  ![Perfumia_UI](/screenshots/product.png)

---

## 👏 Feedbacks

- Feedbacks are highly appriciated. Feel free to give!

[**Return**](#-quick-links)

---

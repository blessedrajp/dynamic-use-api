
# dynamic-use-api

[![npm version](https://img.shields.io/npm/v/dynamic-use-api.svg)](https://www.npmjs.com/package/dynamic-use-api)
[![npm downloads](https://img.shields.io/npm/dt/dynamic-use-api.svg)](https://www.npmjs.com/package/dynamic-use-api)

A simple, lightweight React custom hook to fetch data from any API with built-in `loading`, `error`, and `data` states.

---

## 📦 Installation

```bash
npm install dynamic-use-api

```

## Usage 

```ts
import dynamicUseFetch from 'dynamic-use-api';

function App() {
  const { data, error, loading } = dynamicUseFetch(
    () => fetch('https://dummyjson.com/products').then(res => res.json()),
    []
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.products.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}


```

## ⚙️ API

| Parameter   | Type                 | Description                                           |
| ----------- | -------------------- | ----------------------------------------------------- |
| `apiMethod` | `() => Promise<any>` | The API call you want to make. Must return a Promise. |
| `deps`      | `any[]`              | Dependency array for `useEffect`                      |



## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Author

Made with ❤️ by blessedrajp



## 🤝 Contribution
Contributions are welcome!
If you'd like to contribute:

1. Fork the repository.

2. Clone your fork:

```bash 
git clone https://github.com/blessedrajp/dynamic-use-api.git
```
3. Create a new branch and commit your changes.

4. Open a pull request to the main repository.


## 📬 Support
If you have any issues or questions, feel free to open an issue on the GitHub Issues page.

## 📌 Notes
✅ Replace your-username in the GitHub URLs with your actual GitHub username.
✅ Ensure your repository includes a LICENSE file if you intend to open-source it.


### Steps to Follow:
1. **Copy this file** and paste it into your `README.md`.
2. **Replace** `your-username` in the GitHub URLs with your actual GitHub username.
3. **Ensure the repository has a `LICENSE` file** (MIT or another license) if you intend to have an open-source license.

Let me know if you'd like any further changes!

# Happy Coding! 🚀


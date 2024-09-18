document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");
  btn.addEventListener("click", async () => {
    const res = await fetch(import.meta.env.VITE_GET_HELLO_WORLD_API_URL);
    const data = await res.json();
    output.textContent = data.res;
  });
});
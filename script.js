const form = document.querySelector("form");
// console.log(form[0]);
const image = document.querySelector("img");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const profile = {
        avatar: e.target.avatar.files[0],
        username: e.target.username.value,
        gender: e.target.gen.value,
        accept: e.target.accept.checked,
        city: e.target.city.value,
        description: e.target.desc.value,
    };
    const url = URL.createObjectURL(e.target.avatar.files[0]);
    console.log(url);
    image.src = url;
    console.log(profile);
    // e.target.name
});

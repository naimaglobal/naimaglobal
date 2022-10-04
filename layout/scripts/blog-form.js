var form = document.getElementById("my-form-blog");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status-blog");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML =
          "Thanks for your submission!! We have received your blog submission.";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Oops! There was a problem submitting your blog.";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your blog.";
    });
}
form.addEventListener("submit", handleSubmit);

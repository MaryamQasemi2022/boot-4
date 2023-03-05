const container = document.querySelector(".products  div.table-responsive");
const tableElem = document.createElement("table");
tableElem.classList.add("table", "table-hover");
container.appendChild(tableElem);
const tbodyElem = document.createElement("tbody");

const data = {
  keies: ["#", "نام محصول", "موجودی", "قیمت", "وضعیت", "عملیات"],
  products: [
    {
      id: "1",
      name: "محصول اول",
      mojodi: "3",
      price: "30000",
      status: "تایید شده",
    },
    {
      id: "2",
      name: "محصول دوم",
      mojodi: "30",
      price: "4000",
      status: "تایید شده",
    },
    {
      id: "3",
      name: "محصول سوم",
      mojodi: "10",
      price: "10000",
      status: "تایید نشده",
    },
    {
      id: "4",
      name: "محصول چهارم",
      mojodi: "7",
      price: "9000",
      status: "تایید نشده",
    },
    {
      id: "5",
      name: "محصول پنجم",
      mojodi: "80",
      price: "7000",
      status: "تایید شده",
    },
    {
      id: "6",
      name: "محصول ششم",
      mojodi: "86",
      price: "6000",
      status: "تایید نشده",
    },
    {
      id: "7",
      name: "محصول هفتم",
      mojodi: "70",
      price: "7000",
      status: "تایید نشده",
    },
    {
      id: "8",
      name: "محصول هشتم",
      mojodi: "8",
      price: "80000",
      status: "تایید شده",
    },
    {
      id: "9",
      name: "محصول نهم",
      mojodi: "3",
      price: "30000",
      status: "تایید شده",
    },
    {
      id: "10",
      name: "محصول دهم",
      mojodi: "3",
      price: "30000",
      status: "تایید شده",
    },
  ],
};

let filterProducts = [];
let activePage = 1;
let deletedProducts = [];
const handleDelete = (elemt) => {
  filterProducts =
    filterProducts.length > 0
      ? filterProducts.filter((item) => item.id !== elemt.toString())
      : data.products.filter((item) => item.id !== elemt.toString());

  deletedProducts.push(
    data.products.filter((item) => item.id == elemt.toString())[0]
  );

  paginateProducts(filterProducts);
  document.querySelectorAll(".paginationbtn")[activePage - 1]
    ? ""
    : (activePage -= 1);
  createTbody(filterProducts);
  console.log(deletedProducts);
};
const handleActiveButton = (e) => {
  document.querySelectorAll(".paginationbtn").forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
};

const createThead = () => {
  const theadElem = document.createElement("thead");
  const trElem = document.createElement("tr");
  data.keies.forEach((key) => {
    const thElem = document.createElement("th");
    thElem.innerText = key;
    trElem.appendChild(thElem);
  });
  tableElem.appendChild(theadElem);
  theadElem.appendChild(trElem);
};

const createTbody = (products = data.products) => {
  tbodyElem.innerHTML = "";

  products.slice(3 * activePage - 3, 3 * activePage).forEach((key, index) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
    <th scope="row">${3 * activePage - 3 + index + 1}</th>
                          <td> ${key.name}</td>
                          <td>${key.mojodi}</td>
                          <td> ${key.price}</td>
                          <td>${key.status}</td>
                          <td>
                          <div class="dropdown">
                          <button
                            class="btn btn-blue dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            
                          >
                            عملیات
                          </button>
                          <ul class="dropdown-menu">
                           
                            <li>
                              <a class="dropdown-item" href="#" onClick=(handleDelete(${
                                key.id
                              }))>حذف </a>
                            </li>
                           
                          
                          </ul>
                        </div>
                          </td>
    `;
    tbodyElem.appendChild(trElem);
  });

  tableElem.appendChild(tbodyElem);
};

// pagination
const paginateProducts = (products = data.products) => {
  document.querySelector(".products .pagination-btns").innerHTML = "";
  new Array(Math.ceil(products.length / 3)).fill("0").forEach((item, index) => {
    const buttonElem = document.createElement("button");
    buttonElem.classList.add("btn", "btn-blue", "mx-2", "paginationbtn");
    buttonElem.addEventListener("click", (event) => {
      activePage = index + 1;
      filterProducts.length > 0 ? createTbody(filterProducts) : createTbody();
      handleActiveButton(event);
    });
    buttonElem.innerText = index + 1;
    document
      .querySelector(".products .pagination-btns")
      .appendChild(buttonElem);
  });

  document.querySelectorAll(".paginationbtn")[activePage - 1]
    ? document
        .querySelectorAll(".paginationbtn")
        [activePage - 1].classList.add("active")
    : document
        .querySelectorAll(".paginationbtn")
        [activePage - 2].classList.add("active");
};
const loading = () => {
  createThead();
  createTbody();
  paginateProducts();
};

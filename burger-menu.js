//commonData.js 

const page = document.querySelector(".body");
const UI_BURGER = {
  headerSelector: ".header",
  burgerSelector: ".burger",
  closeBtnClass: "burger__close-btn",
};
const UI_HEADER = {
  headerSelector: ".header",
  burgerBtnSelector: ".header__button_type_burger",
};
export { page, UI_BURGER, UI_HEADER };



//burgerMenu.js

import { page } from "../utils/commonData";

export default class BurgerMenu {
  constructor({ headerSelector, burgerSelector, closeBtnClass }) {
    this._headerSelector = headerSelector;
    this._burgerSelector = burgerSelector;
    this._closeBtnClass = closeBtnClass;
  }

  openBurger() {
    this._burger.classList.add("burger_opened");
    page.style.overflow = "hidden";
    page.addEventListener("keydown", this._handleEscClose);
  }

  closeBurger() {
    this._burger.classList.remove("burger_opened");
    page.style.overflow = "initial";
    page.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._getBurgerItems();
    this._burger.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains(this._closeBtnClass)) {
        this.closeBurger();
      }
    });
  }

  _getBurgerItems() {
    this._header = document.querySelector(this._headerSelector);
    this._burger = this._header.querySelector(this._burgerSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.closeBurger();
    }
  };
}


//header.js

export default class Header {
  constructor({ headerSelector, burgerBtnSelector }, burgerCallBack) {
    this._headerSelector = headerSelector;
    this._burgerBtnSelector = burgerBtnSelector;
    this._burgerCallBack = burgerCallBack;
  }

  _getBurgerBtn() {
    this._header = document.querySelector(this._headerSelector);
    this._burgerBtn = this._header.querySelector(this._burgerBtnSelector);
    return this._burgerBtn;
  }

  setEventListeners() {
    this._burgerCallBack(this._getBurgerBtn());
  }
}


//utils.js 

import BurgerMenu from "../components/burgerMenu";
import Header from "../components/header";
import { UI_BURGER, UI_HEADER } from "./commonData";

const burger = new BurgerMenu(UI_BURGER);
const header = new Header(UI_HEADER, (button) => {
  button.addEventListener("click", () => {
    burger.openBurger();
  });
});
header.setEventListeners();
burger.setEventListeners();



//index.js

import "../utils/utils";

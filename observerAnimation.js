//observerAnimation.js
export default class ObserverAnimation {
  constructor({
    elementsSelector,
    animationClass,
    options = {
      root: null,
      rootMargin: "-10% 0px",
      threshold: 0,
    },
    timeout = 1000,
  }) {
    this._elementsSelector = elementsSelector;
    this._animationClass = animationClass;
    this._options = options;
    this._timeout = timeout;
  }

  _appear(element) {
    element.target.classList.add(this._animationClass);
    setTimeout(this._removeAllTracks.bind(this, element.target), this._timeout);
  }

  _intersectionChecker = (items) => {
    items.forEach((element) => {
      element.isIntersecting && this._appear(element);
    });
  };

  _removeAllTracks = (target) => {
    this._observer.unobserve(target);
    target.classList.remove(
      this._elementsSelector.substring(1),
      this._animationClass
    );
  };

  initialObserve() {
    this._targets = document.querySelectorAll(this._elementsSelector);
    this._observer = new IntersectionObserver(
      this._intersectionChecker,
      this._options
    );
    this._targets.forEach((target) => {
      this._observer.observe(target);
    });
  }
}

// TO USE DO FOLLOW (EXAMPLE):
//index.js or another main script file
const animationName = {
  elementsSelector: ".fade-in-up",
  animationClass: "fade-in-up_visible",
};

const observerAnimation = new ObserverAnimation(animationName);
observerAnimation.initialObserve();

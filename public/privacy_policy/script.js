/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const root = document.getElementById('root');

const navigatorLang = navigator.language || 'en-US';

const { sections: privacyPolicySections, basicInfo } = elements[navigatorLang];

function createElement({ tag, content, attributes = {} }) {
  const element = document.createElement(tag);
  element.textContent = content;

  const attrs =
    typeof attributes === 'object' ? Object.entries(attributes) : [];

  if (attrs.length) {
    attrs.forEach(function ([key, value]) {
      element.setAttribute(key, value);
    });
  }

  return element;
}

function createListElement(list) {
  const listElement = document.createElement('ul');

  list.forEach(function (item) {
    listElement.appendChild(
      createElement({
        tag: 'li',
        content: item,
      }),
    );
  });

  return listElement;
}

function setElement(type, content) {
  switch (type) {
    case 'title':
      return createElement({
        tag: 'h1',
        content,
        attributes: { id: 'title' },
      });
    case 'label':
      return createElement({
        tag: 'label',
        content,
        attributes: { htmlFor: 'title' },
      });
    case 'paragraph':
      return createElement({
        tag: 'p',
        content,
      });
    case 'list':
      return createListElement(content);
    default:
      break;
  }
}

basicInfo.forEach(function ({ type, content }) {
  const element = setElement(type, content);

  if (!element) {
    return;
  }

  root.appendChild(element);
});

privacyPolicySections.forEach(function ({ title, children }) {
  const policyElement = document.createElement('section');
  const titleElement = createElement({
    tag: 'h2',
    content: title,
  });

  policyElement.appendChild(titleElement);

  children.forEach(function ({ type, content }) {
    const element = setElement(type, content);

    if (!element) {
      return;
    }

    policyElement.appendChild(element);
  });

  root.appendChild(policyElement);
});

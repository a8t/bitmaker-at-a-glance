import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

import { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<App />)
  const appInstance = wrapper.instance()

  return {
    wrapper,
    appInstance,
  }
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  shallow(<App match={{ url: "hi" }} />)
});

describe("handledatachange method", () => {

  it(" changes data", () => {
    const { wrapper, appInstance, sampleData } = setup()
    appInstance.handleDataChange("room201","monday","hello")
    expect(appInstance.state.data.room201.monday).toEqual("hello")
  })

})
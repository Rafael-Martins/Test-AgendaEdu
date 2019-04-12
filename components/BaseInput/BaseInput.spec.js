import React from "react";
import { shallow } from "enzyme";
import { BaseInput } from "./BaseInput";

describe("BaseInput", () => {
  describe("Basic tests", () => {
    it("should be the right label", () => {
      const wrapper = shallow(<BaseInput label="label" />);
      const InputLabel = wrapper.findWhere(
        node => node.prop("testID") === "InputLabel"
      );
      expect(InputLabel.text()).toBe("label");
    });

    it("should password be secure", () => {
      const wrapper = shallow(<BaseInput type="password" />);
      const Input = wrapper.findWhere(node => node.prop("testID") === "Input");
      expect(Input.props().secureTextEntry).toBe(true);
    });

    it("should be not secure", () => {
      const wrapper = shallow(<BaseInput />);

      const Input = wrapper.findWhere(node => node.prop("testID") === "Input");
      expect(Input.props().secureTextEntry).toBe(false);
    });
  });
});

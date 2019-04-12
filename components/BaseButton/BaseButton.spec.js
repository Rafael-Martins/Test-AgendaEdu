import React from "react";
import { shallow } from "enzyme";
import { BaseButton } from "./BaseButton";

describe("BaseButtom", () => {
  describe("Basic tests", () => {
    it("should be the right title", () => {
      const wrapper = shallow(<BaseButton title="test" />);
      const ButtomText = wrapper.findWhere(
        node => node.prop("testID") === "ButtonText"
      );

      expect(ButtomText.text()).toBe("test");
    });
  });
});

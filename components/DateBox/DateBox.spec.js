import React from "react";
import { shallow } from "enzyme";
import { DateBox } from "./DateBox";

describe("DateBox", () => {
  describe("Basic tests", () => {
    it("should be the right parsed date", () => {
      const date = new Date(2013, 6, 2);
      const wrapper = shallow(<DateBox date={date} />);
      const DayText = wrapper.findWhere(
        node => node.prop("testID") === "DayText"
      );
      const MonthText = wrapper.findWhere(
        node => node.prop("testID") === "MonthText"
      );
      expect(DayText.text()).toBe("2");
      expect(MonthText.text()).toBe("jul");
    });
  });
});

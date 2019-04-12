import React from "react";
import { shallow } from "enzyme";
import { EventTime } from "./EventTime";

describe("EventTime", () => {
  describe("Basic tests", () => {
    it("should be the right parsed date", () => {
      const time = new Date(2013, 0, 1, 12, 30);
      const wrapper = shallow(<EventTime time={time} />);
      const TimeText = wrapper.findWhere(
        node => node.prop("testID") === "TimeText"
      );

      expect(TimeText.text()).toBe("12:30");
    });
  });
});

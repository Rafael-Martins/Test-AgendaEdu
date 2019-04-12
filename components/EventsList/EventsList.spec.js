import React from "react";
import { shallow } from "enzyme";
import { EventsList } from "./EventsList";

describe("BaseButtom", () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
      sendAt: "2019-03-07T00:34:35.327Z",
      image:
        "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
      startAt: "2019-07-22T19:01:33.476Z",
      location: "Fake Street, 1001 - Fortaleza CE"
    },
    {
      id: 2,
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
      sendAt: "2019-03-07T00:34:35.327Z",
      image:
        "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
      startAt: "2019-07-22T19:01:33.476Z",
      location: "Fake Street, 1001 - Fortaleza CE"
    },
    {
      id: 3,
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nulla non arcu aliquam rhoncus eu sed leo. Aenean cursus nibh sit amet fringilla sodales. Vestibulum faucibus venenatis tempor. Morbi placerat ac massa id ultricies.",
      sendAt: "2019-03-07T00:34:35.327Z",
      image:
        "https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg",
      startAt: "2019-07-23T19:01:33.476Z",
      location: "Fake Street, 1001 - Fortaleza CE"
    }
  ];

  describe("Basic tests", () => {
    it("should be the right parsed date", () => {
      const wrapper = shallow(<EventsList events={events} />);
      const DayContainer = wrapper.findWhere(
        node => node.prop("testID") === "DayContainer"
      );
      const DayName = wrapper.findWhere(
        node => node.prop("testID") === "DayName"
      );

      expect(DayContainer).toHaveLength(2);
      expect(DayName.first().text()).toBe("terça-feira, 23 de julho");
      expect(DayName.last().text()).toBe("segunda-feira, 22 de julho");
    });
  });
});

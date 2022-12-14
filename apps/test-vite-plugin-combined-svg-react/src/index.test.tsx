import { expect, test } from "vitest";
import renderer from "react-test-renderer";
// Edit an assertion and save to see HMR in action

test("draw correct component html", async () => {
  const {
    ReactComponent: Icon,
    EnumStruct: IconType,
    // @ts-ignore
  } = await import("./assets?combined-svg-react");
  const component = renderer.create(<Icon iconName={IconType.UKR} />);

  expect(component).toMatchSnapshot();
});

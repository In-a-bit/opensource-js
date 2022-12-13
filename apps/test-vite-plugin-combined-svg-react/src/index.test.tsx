import { expect, test } from "vitest";
import {
  ReactComponent as Icon,
  // @ts-ignore
} from "./assets?svg-list-to-switcher";
import renderer from "react-test-renderer";
// Edit an assertion and save to see HMR in action

test("draw correct component html", () => {
  const component = renderer.create(<Icon iconName="UKR" />);

  expect(component).toMatchSnapshot();
});

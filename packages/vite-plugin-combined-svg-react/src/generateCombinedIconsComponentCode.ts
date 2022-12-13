import { promises as fs } from "fs";
import {
  importTemplate,
  enumTemplate,
  ifTemplate,
  functionTemplate,
} from "./componentTemplates";
import { extractFileName } from "./extractFileName";

export async function generateCombinedIconsComponentCode(
  sourcePath: string
): Promise<string> {
  try {
    const iconsArray = await fs.readdir(sourcePath);

    let imports = "";

    for (let icon of iconsArray) {
      imports = imports + importTemplate(extractFileName(icon));
    }

    const enumOptions = iconsArray
      .map((icon) => `${extractFileName(icon)} = "${extractFileName(icon)}",\n`)
      .join("");

    const enumStruct = enumTemplate("EnumStruct", enumOptions);

    const functionOptions =
      iconsArray
        .map(
          (icon) =>
            `${ifTemplate("iconName", extractFileName(icon), "EnumStruct")}`
        )
        .join("") + "\n throw new Error('not implemented');";

    const iconFunction = functionTemplate(
      "iconName",
      functionOptions,
      "EnumStruct"
    );

    const finalString = imports + `${enumStruct}` + `${iconFunction}`;

    return finalString;
  } catch (err) {
    throw err;
  }
}

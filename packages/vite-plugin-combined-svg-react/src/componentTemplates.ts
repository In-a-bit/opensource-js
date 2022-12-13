export const ifTemplate = (
  givenIcon: string,
  existingIcon: string,
  enumName: string
) =>
  `
      if(${givenIcon} == ${enumName}.${existingIcon}) return <${existingIcon} style={{ width: "24px", height: "24px" }} />;
   
  `;

export const functionTemplate = (
  givenIcon: string,
  fucntionBody: string,
  enumName: string
) =>
  `
      export function ReactComponent({ ${givenIcon} }: { ${givenIcon}: ${enumName} }) {
          ${fucntionBody}
      }
  `;

export const enumTemplate = (enumName: string, enumOptions: string) =>
  `
  export enum ${enumName} {
      ${enumOptions}
  }
  `;

export const importTemplate = (existingIcon: string) =>
  `import { ReactComponent as ${existingIcon} } from './assets/${existingIcon}.svg';
`;

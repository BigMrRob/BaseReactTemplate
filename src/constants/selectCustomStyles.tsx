import { Colors } from ".";

/**
 * **Custom styles for the select input**
 */
export const selectCustomStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: Colors.Gray.Lightest,
    border: `2px solid ${Colors.Gray.Lighter}`,
    borderRadius: "4px",
    height: "50px",
    fontSize: "16px",
    color: Colors.FontDark,
  }),
};

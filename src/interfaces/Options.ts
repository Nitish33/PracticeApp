export type OptionType = {
  key: string;
  label: string;
  component?: any;
};

export type OptionListProps = {
  options: Array<OptionType>;
};

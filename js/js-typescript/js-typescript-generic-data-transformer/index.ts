type TransformationRules<T> = {
  [Property in keyof T]?: (value: T[Property]) => any;
};

function transformData<T>(items: T[], rules: TransformationRules<T>): T[] {
  // TODO: Implement the transformData function
  return items; // Placeholder return, update accordingly
}

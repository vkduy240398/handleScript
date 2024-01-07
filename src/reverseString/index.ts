export default function reverseString(string: string, characters?: string) {
  const arrayStrings = string.split(characters || "");
  const reverse = arrayStrings.reverse();

  return reverse.join(characters);
}

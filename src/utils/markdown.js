import showdown from 'showdown';

export function render(source) {
  var converter = new showdown.Converter();
  return converter.makeHtml(source);
}

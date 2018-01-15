module.exports = (markdown, metaData) => {
  // Use the available data to create a custom release
  console.log(markdown);
  return 'Using Custom Changelog hooks \n' + markdown
}

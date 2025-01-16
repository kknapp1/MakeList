function doFormat(textToFormat, charSeperator = ',', prefix = '\'', suffix = '\'') {
    if (!textToFormat) return ''; // Handle null, undefined, or empty strings
  
    // Split input into lines, trim each, and filter out empty lines
    const lines = textToFormat
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  
    // Format each line with prefix and suffix, then join with the specified separator
    const formattedLines = lines.map(line => `${prefix}${line}${suffix}`);
    return formattedLines.join(charSeperator);
  }
  
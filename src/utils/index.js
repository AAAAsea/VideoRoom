
export const qualities = {
  'h': {
    width: {
      max: 1920
    },
    height: {
      max: 1080
    }
  },
  's': {
    width: {
      max: 1280
    },
    height: {
      max: 720
    }
  },
  'm': {
    width: {
      max: 720
    },
    height: {
      max: 480
    }
  },
  'l': {
    width: {
      max: 480
    },
    height: {
      max: 360
    }
  },
  desc: {
    h: '原画',
    m: '高清',
    s: '标清',
    l: '流畅'
  }
}

export const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
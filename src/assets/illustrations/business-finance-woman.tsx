import { chakra, ChakraProps, ThemingProps } from "@chakra-ui/react";

interface IProps extends ChakraProps, ThemingProps {}

/**
 * Topic: Business, finance
 * Keywords: boss, king, woman, account, graph, taxes, success, competition, manager
 */
const BusinessFinanceWoman: React.FC<IProps> = ({
  color,
  ...rest
}): JSX.Element => {
  return (
    <chakra.svg
      viewBox="0 0 1000 1000"
      sx={{
        ".cls-1,.cls-4, .cls-5": {
          fill: "none",
          strokeMiterlimit: 10,
          strokeWidth: "3.47px",
        },
        ".cls-1": {
          stroke: "#000",
        },
        ".cls-2": {
          fill: color,
        },
        ".cls-3": {
          fill: "#fff",
        },
        ".cls-4": {
          stroke: "#fff",
          opacity: 0.54,
        },
        ".cls-5": {
          stroke: "#ccdde2",
        },
        ".cls-6": {
          fill: "#d7e8f0",
        },
        ".cls-7": {
          fill: "#353642",
        },
      }}
      {...rest}
    >
      <path
        className="cls-1"
        d="M168.41,445.91h0A10.25,10.25,0,0,0,177.93,458l.95.05"
      />
      <rect
        className="cls-2"
        x="604.9"
        y="226.26"
        width="187.32"
        height="289.21"
        rx="17.64"
      />
      <path
        className="cls-2"
        d="M441.06,321.89l-.9,19.67-2.53,16.13L423.7,446.87l-.37,2.36-.57-4.72-1.44-11.87L439.83,324Z"
      />
      <path
        className="cls-2"
        d="M444.46,245.62l-.35,7.5C444.11,248.84,444.46,245.62,444.46,245.62Z"
      />
      <path
        className="cls-2"
        d="M812.75,230.07V641a21.58,21.58,0,0,1-21.56,21.57h-331c.14-2,.26-4,.4-6,.11-2.17.23-4.3.34-6.41a124.31,124.31,0,0,1-13.3,5.35c-3.4,1.18-6.88,2.2-10.37,3.1l-.35-.25A21.5,21.5,0,0,1,428.15,641V505.34l5.11-37.07L435.09,455l.14-3v0l1.46-32.72,0-.26.48-11.15.05-.65.07-1.71,2-45.79.81-18.12,3.93-25.16c-1.23,2.27-2.29,4.17-3,5.49l.39-9.12L443,278.83v-.1l1.13-25.4c0,4.62.44,10.45,2.18,14.85a10.91,10.91,0,0,0,3.77,5.23l.32.23h0a2.9,2.9,0,0,0,.34.19l0-.16L456,240.23a.1.1,0,0,0,0,0l1.87-2.73,9.28-13.67a.11.11,0,0,0,0-.12l1.08-8.68.58-4.65.7,0,7.82-.3h.09l29.74-1.16h.2l58.8-.35h225A21.55,21.55,0,0,1,812.75,230.07Z"
      />
      <path
        className="cls-2"
        d="M807.64,235.53v400a21,21,0,0,1-21,21H460.57c.11-2.17.23-4.3.34-6.41a124.31,124.31,0,0,1-13.3,5.35,4.5,4.5,0,0,0-.44-.16,21.08,21.08,0,0,1-13.91-19.79v-181L428.15,457l-.33.16-.69-1.71-3.43-8.56-.94-2.36-8.66-21.62s16.48-66.5,27.35-110.12c4-16,7.22-28.95,8.59-34.38.41-1.62.67-2.57.71-2.73v0a.81.81,0,0,0,0-.11,2.25,2.25,0,0,0-.14-.91,8.3,8.3,0,0,0-.49-1,.55.55,0,0,0-.09-.19,45.28,45.28,0,0,0-3.79-5.48l-1.81-22.31.3-.23,1.37-1.09,9.32-7.4,2.18-5.74L461.88,220l1.9-5,4.51,0h1.16l8.17,0h0l30.18-.09h2.59l57.25-.35h219A21,21,0,0,1,807.64,235.53Z"
      />
      <path
        className="cls-1"
        d="M428.15,455V641a21.5,21.5,0,0,0,8.74,17.34l.35.25"
      />
      <path
        className="cls-1"
        d="M460.17,662.53h331A21.58,21.58,0,0,0,812.75,641V230.07a21.55,21.55,0,0,0-21.56-21.57h-225l-58.8.35h-.2l-29.79.16h-.16l-7.75.05"
      />
      <rect
        className="cls-3"
        x="451.87"
        y="536.71"
        width="340.34"
        height="103.72"
        rx="17.64"
      />
      <line className="cls-4" x1="487.23" y1="589.87" x2="613.42" y2="589.87" />
      <rect
        className="cls-2"
        x="473.17"
        y="559.81"
        width="206.52"
        height="59.01"
        rx="5.98"
      />
      <circle className="cls-3" cx="637.93" cy="578.56" r="6.1" />
      <path className="cls-3" d="M620.88,606.17a17.06,17.06,0,0,1,34.11,0Z" />
      <path
        className="cls-2"
        d="M731.79,559.81a30.06,30.06,0,1,0,30,30.06A30,30,0,0,0,731.79,559.81Zm0,52.85a4.4,4.4,0,1,1,0-8.79,4.4,4.4,0,0,1,0,8.79Zm5.53-33.8c-.93,6.52-1.71,13.37-3.66,19.69-.44,1.53-3.31,1.53-3.77,0A111.22,111.22,0,0,1,726.74,584c-.6-3.56-2.68-9.35-.69-12.8,1.76-3.1,6.71-3.47,9.56-1.85C739.12,571.36,737.74,575.62,737.32,578.86Z"
      />
      <path
        className="cls-5"
        d="M809.35,652.58a287.12,287.12,0,0,1,39.87,73.84c21.62,59.1,24.11,130-18,180.86-27.38,33.07-71.74,42.9-112.81,42.72"
      />
      <path
        className="cls-5"
        d="M309.69,316.87c-20-53-22.05-115.12,2.76-166.91C346.05,79.89,425.18,47.08,499.79,50.2,590.47,54,662.92,112,705.15,190.08c3.27,6,6.37,12.18,9.31,18.42"
      />
      <path
        className="cls-3"
        d="M763.71,435.33A63,63,0,1,1,712.38,366a4.09,4.09,0,0,1,3.18,5l-1.25,4.84-11.13,43.48a4.08,4.08,0,0,0,5.05,4.94l43.21-12.09,5.91-1.65a4.08,4.08,0,0,1,5.06,3A62.73,62.73,0,0,1,763.71,435.33Z"
      />
      <path
        className="cls-3"
        d="M765.24,390.53a4.06,4.06,0,0,1-2.72,5.38l-4.07,1.14-35.2,9.83a4.07,4.07,0,0,1-5-4.93l9.06-35.4.88-3.4a4.05,4.05,0,0,1,5.2-2.87A53.08,53.08,0,0,1,765.24,390.53Z"
      />
      <circle className="cls-6" cx="700.18" cy="265.48" r="17.34" />
      <rect
        className="cls-6"
        x="637.93"
        y="303.79"
        width="126.19"
        height="3.47"
      />
      <rect
        className="cls-6"
        x="637.93"
        y="316.63"
        width="126.19"
        height="3.47"
      />
      <rect
        className="cls-6"
        x="637.93"
        y="328.34"
        width="126.19"
        height="3.47"
      />
      <path
        className="cls-7"
        d="M469.64,404.52a.6.6,0,0,1-.05-.16,41.61,41.61,0,0,0-1.67-6.57,4.2,4.2,0,0,0-.16-.51c-.23-.65-.48-1.3-.74-1.95-2.54-6.43-6.5-11.82-10.94-16.84-.42-.44-.81-.88-1.21-1.32-.14-.14-.25-.28-.39-.42a222.49,222.49,0,0,0-17.17,28.72,110.25,110.25,0,0,0-7.91,20.8,0,0,0,0,0,0,0,66.63,66.63,0,0,0-1.59,28.87v0a3.76,3.76,0,0,0,.37-.16l1-.42,1.18-.51q2.38-1,4.86-2.15c1-.44,2-.93,3-1.41,3.21-1.55,6.36-3.24,9.41-5.07,7.43-4.44,14.56-9.93,18.68-17.54a33.28,33.28,0,0,0,3.86-14.23c0-.14,0-.3,0-.44a8.63,8.63,0,0,0,0-.88A39.22,39.22,0,0,0,469.64,404.52Zm77.19-17.08a.22.22,0,0,1,0-.11,126.45,126.45,0,0,0-3.5-16.38v-.05c-.18-.72-.39-1.41-.6-2.13,0,0,0-.12-.07-.16a279.53,279.53,0,0,0-9.48-26.52C525,321.91,513.42,300.53,495,287.5c0,0,0,0,0,0a.53.53,0,0,1-.12-.1c-.51-.32-1-.69-1.57-1C483,279.61,470.35,276.23,458,274.8c-.79-.12-1.6-.21-2.39-.28a40.91,40.91,0,0,0-4.86,1.14,2.26,2.26,0,0,0-.3.06,45,45,0,0,0-4.32,1.55,5.59,5.59,0,0,0-.61.26c-.87.37-1.71.76-2.54,1.2a51.54,51.54,0,0,0-9.09,5.9c-.38.26-.72.56-1.07.84a53.69,53.69,0,0,1-2.41,8,28.86,28.86,0,0,1-5.62,9.81,12.43,12.43,0,0,1-3.86,2.91l-.21.07a11.28,11.28,0,0,1-7,.74,3.92,3.92,0,0,1-.53-.09c-5.57,6.64-11,12.5-17.45,15.55l-.11.05a22.06,22.06,0,0,1-11.92,2,5.11,5.11,0,0,1-.55,0c-16.55,19.55-51.74,71.94-42.67,155.66,0,0,.23,1.3.76,3.38.19.74.42,1.55.67,2.45,1.92,6.6,6,17.15,13.42,23.31-.21,1.57-.34,3.17-.41,4.76-.05,1-.07,2.06-.07,3.13q.35-3.44.95-6.74c.09-.58.18-1.15.32-1.71.37-2,.86-4,1.39-6l.07-.28c.62-2.15,1.32-4.23,2.13-6.27.27-.69.57-1.36.88-2a49.35,49.35,0,0,1,21.65-23.72A70.47,70.47,0,0,1,395,464.82a2.69,2.69,0,0,1,.47-.14,97.57,97.57,0,0,1,12.82-3.1.11.11,0,0,0,.07,0s7.82,28,5.71,45.26c0,.07,0,.12,0,.19s0,.11,0,.18c2.2-.11,4.42-.3,6.62-.53,2.55-.28,5-.65,7.48-1.06,1.73-.28,3.42-.61,5.11-1,3.75-.77,7.45-1.67,11.08-2.73,1.25-.35,1.93-.56,1.93-.56.32-.09.67-.18,1-.3,5.88-1.76,11.66-3.89,17.61-6.22,1.5-.61,3-1.23,4.51-1.88q1.53-.61,3.06-1.32c2.52-1.11,5-2.29,7.42-3.51a181.77,181.77,0,0,0,17.54-9.89c21-13.37,40.06-32,47.21-55.85C548.13,410.65,548.43,399,546.83,387.44Z"
      />
      <path
        className="cls-2"
        d="M432.82,285.45a55.08,55.08,0,0,1-2.41,8c-4.49,12-10.74,14.88-17.26,13.42-4.84-1.09-9.84-4.51-14.42-8.38a2.49,2.49,0,0,0-2.84-.48c-7.18,4.67-18.22,7.33-25.53,5.51-5.44-1.35-8.81-5.19-7-12.55h0a35.58,35.58,0,0,1,3.93-8.93c6.51-11,15.55-8,22.38-3a47.36,47.36,0,0,1,7.43,7,2.5,2.5,0,0,0,3.28.63C411.6,279,437.44,263.32,432.82,285.45Z"
      />
      <path
        className="cls-7"
        d="M340.44,480.06s-.35,28.44-15.18,31.8h-.05c-36.35-5.46-42.16-21.57-42.16-21.57,1.39-29.64,9.67-70.18,16.29-94.39-3.95,1.55-7.82,3.31-11.59,5-13.47,6.09-26.52,13.19-39.36,20.55-8.33,4.77-16.59,9.72-24.78,14.74-.77-30.57-19.19-30.5-30.25-36.1,70-61.8,130.65-93.36,170-109.15-1.85,7.36,1.53,11.2,7,12.55-3.29,9.23-2.5,18.58,12.08,20.8.23,0,.44.07.67.09C366.56,344,331.37,396.34,340.44,480.06Z"
      />
      <path
        className="cls-2"
        d="M471.33,644.57S442.66,663.52,391.91,664s-105-19.39-105-19.39c-14-45-2.92-154.66-2.92-154.66-.23,4.28,15.41,13.69,15.41,13.69s33,15.72,39.53-7.42,1.73-8.59,8.77,1.62,9,7.49,8.14,22.56,10.41,14.74,14.12,7.91c1.43-2.61,1.8-7,3.12-11.15,1.16.16,10.55,1.22,7.36-9.47,3.15-1.5,7.57-2.1,13.86-1.2,24,3.45,51.93-5.09,51.93-5.09C477.83,546.62,471.33,644.57,471.33,644.57Z"
      />
      <path
        className="cls-2"
        d="M433.37,421.83s7.08-10.15,37.79-9.43c0,0-5.6-36.59-17.24-33.84C453.92,378.56,431.83,411.59,433.37,421.83Z"
      />
      <path
        className="cls-2"
        d="M446.45,244.7c-.79.33-1.47.6-2,.81l-.95.33h-.06l-.31.11-.06,0c-6.22-3.26-5.63-11.17-5.63-11.17,17.08.13,18.51-13.91,18.51-13.91-1.19-6.45-2.88-9.31-6-10.64s-8.07-1.19-15.56-1.67l-1.24-.09c-11.15-.84-17.84-11.15-20.75-17a34.52,34.52,0,0,1-1.75-4c-11.53,6.42-18.2,14.07-21.87,19.6-6.92-34.29,28.49-34.55,28.49-34.55a67.91,67.91,0,0,1,17.62-.06c1.36.35,2.66.72,3.91,1.14.62.2,1.23.41,1.84.65s1.18.47,1.77.71a13,13,0,0,1,1.21.53,48.31,48.31,0,0,1,20.58,17.28c.07.11.14.21.19.31a11.53,11.53,0,0,1,.64,1.1C478.05,227.37,455.32,240.84,446.45,244.7Z"
      />
      <path
        className="cls-2"
        d="M446.45,244.7C443.4,241,443.8,236,443.8,236c17.07.13,18.51-13.92,18.51-13.92-1.85-9.88-4.81-11.34-12.36-11.84-2.79-.2-6.21-.26-10.43-.56a18.44,18.44,0,0,1-5.13-1.11c-12-4.43-17.39-19.88-17.39-19.88-1.62.9-3.17,1.85-4.6,2.8a34.52,34.52,0,0,1-1.75-4c-11.53,6.42-18.2,14.07-21.87,19.6-6.92-34.29,28.49-34.55,28.49-34.55a67.91,67.91,0,0,1,17.62-.06c1.36.35,2.66.72,3.91,1.14.62.2,1.23.41,1.84.65s1.18.47,1.77.71a13,13,0,0,1,1.21.53,48.31,48.31,0,0,1,20.58,17.28c.07.11.14.21.19.31a11.53,11.53,0,0,1,.64,1.1C478.05,227.37,455.32,240.84,446.45,244.7Z"
      />
      <path
        className="cls-2"
        d="M570.26,328.36c.33,9.25-9.64,21.49-15.52,28.67-5.16,6.29-10.67,12.61-11.06,11.31,0,0,0-.11-.07-.16-2.62-9-6-17.86-9.49-26.52-8.12-20.17-19.74-41.56-38.2-54.58,0,0,0,0-.05-.05a66.07,66.07,0,0,0-37.09-13.33s6.48-14.11,10.13-22.7,5-12.26,5-12.26c6.2-18.91,3.61-40.61-.42-44.36a.31.31,0,0,0-.14-.09c-3.74-8.36-9.3-1.79-9.3-1.79l.07.14a62.67,62.67,0,0,0-5.34-5.71,4.37,4.37,0,0,1,.11-1c.46-2.62,2.46-4.68,4.68-6.21a21.59,21.59,0,0,1,13-3.56c12.78.42,20.67,5.9,25.62,13.56h0c5.53,11.32,5.26,24.53,6.6,36.77.58,5.32,1,13.54,5.71,17.22,0,0,.63,18.28,13.1,38.34s35.17,35.24,35.17,35.24Z"
      />
      <path
        className="cls-1"
        d="M424.21,241.38c-3.57,4.79-9.07,6.44-14.41,8.49-12.12,4.67-23.11,3.08-25.83-11.25-1.75-9.22-2.16-18.66,2.3-27.2,5.34-10.24,14.75-17.94,24.37-24,0,0,8.35,23.45,30,21.27s20.7,27-5.22,26"
      />
      <path
        className="cls-1"
        d="M456.45,183.61a48.52,48.52,0,0,0-14-8.66,17.66,17.66,0,0,0-1.77-.71c-.61-.24-1.22-.45-1.84-.65a39.07,39.07,0,0,0-3.91-1.14,60.61,60.61,0,0,0-24-1.14c-43,6.46-25.5,41.91-25.5,41.91"
      />
      <path
        className="cls-1"
        d="M460.17,273.74c3.17-13.65,11.22-25.34,14.84-38.6,3.57-13.07,4-28.34-1.67-40.86-3.74-8.36-9.29-1.78-9.29-1.78"
      />
      <path
        className="cls-1"
        d="M464.12,192.64a.63.63,0,0,1,.07.12l.21.32a10.29,10.29,0,0,1,.62,1.09c5.35,9.51,6.41,21.1,1.11,33.39a31.74,31.74,0,0,1-21.68,18.05l1.95,24a4.33,4.33,0,0,0,4,4l6.2.47c13.1,1.29,26.75,4.65,37.6,11.8.58.37,1.13.76,1.69,1.13,0,0,0,.05.05.05,18.46,13,30.08,34.41,38.2,54.58,3.49,8.66,6.87,17.52,9.49,26.52,0,.05,0,.12.07.16,5.09,17.47,7.33,35.48,1.89,53.62-7.15,23.86-26.21,42.48-47.2,55.86a180.76,180.76,0,0,1-17.54,9.88c-4.88,2.48-9.91,4.67-15,6.71-14.55,5.81-28.46,10-44.19,11.82a135.12,135.12,0,0,1-22.75.49c-6.32-.37-14.79-1.34-20.36,2.48a10,10,0,0,0-2.27,2c-2.15,2.48-3,5.78-3.68,8.95s-1.36,6.53-3.24,9.17-5.34,4.56-8.45,3.47c-5-1.78-4.83-8.15-5-12.45-.11-2.36-.11-4.65,0-6.8,1-24.58,19.37-44.73,43.41-49.82a170,170,0,0,0,39.94-13.61q4.83-2.33,9.42-5.07c7.43-4.44,14.55-9.92,18.67-17.54,5.37-9.88,4.88-22.19.7-32.6-6.44-16.18-21.52-25.87-31.94-39.15"
      />
      <ellipse
        className="cls-7"
        cx="411.41"
        cy="216.9"
        rx="2.74"
        ry="2.32"
        transform="translate(23.01 472.73) rotate(-61.17)"
      />
      <ellipse
        className="cls-7"
        cx="390.7"
        cy="214.32"
        rx="2.74"
        ry="2.32"
        transform="translate(14.55 453.25) rotate(-61.17)"
      />
      <path
        className="cls-7"
        d="M471.32,876v68.89a5.07,5.07,0,0,1-9.44,2.57c-3-5.25-8.54-15.46-15.74-29,16.78-6.94,6.25-56.46,5.88-58.22a10.16,10.16,0,0,0,9.07,5.53A10.24,10.24,0,0,1,471.32,876Z"
      />
      <path
        className="cls-7"
        d="M422.48,923.53c-.81,4.28-1.65,8.6-2.48,13A16.62,16.62,0,0,1,403.69,950H344.8a4.63,4.63,0,0,1-2.11-8.75l31.19-15.92,2.32-1.18S399.13,940,422.48,923.53Z"
      />
      <path
        className="cls-1"
        d="M430.34,425.88c5.25-10.14,21.1-13,40.82-12.59"
      />
      <path
        className="cls-3"
        d="M548.91,462.82l-27,50.2L530,694.51l-13.61-9.35-13.09-149S495.11,476,519.1,462.82,548.91,462.82,548.91,462.82Z"
      />
      <path className="cls-1" d="M547.8,387a.18.18,0,0,1,0-.12" />
      <path
        className="cls-1"
        d="M473.35,194.27c-3.74-8.35-9.3-1.76-9.3-1.76a38.83,38.83,0,0,0-5.16-6.55c-.78-.81-1.59-1.57-2.43-2.36,1.14-5.37,5.79-9.16,11-10.36,13.66-3.13,28.65,3.95,34.78,16.52,6.25,12.77,5.37,28,8.1,41.7,3,14.78,6.83,29.52,13.38,43.18,5.55,11.54,13.12,22.28,22.88,30.63,6.6,5.63,15.39,9.3,20.23,16.8,12.42,19.35-12.15,28-20.23,41.1a15.18,15.18,0,0,0-2.31,7.36"
      />
      <path
        className="cls-1"
        d="M396.82,206.26s1.47,6-2.67,14.78c-1.11,2.34,4,2.47,5.21,2.7"
      />
      <ellipse
        className="cls-1"
        cx="411.57"
        cy="212.86"
        rx="11.62"
        ry="9.44"
        transform="translate(62.86 517.98) rotate(-68.53)"
      />
      <ellipse
        className="cls-1"
        cx="387.28"
        cy="210.19"
        rx="11.62"
        ry="9.44"
        transform="translate(49.94 493.69) rotate(-68.53)"
      />
      <path
        className="cls-3"
        d="M388.49,202.52h0a4.56,4.56,0,0,1,1.68.32c3.08,1.21,4.28,5.49,2.69,9.54-1.27,3.23-4.06,5.48-6.78,5.48a4.57,4.57,0,0,1-1.69-.31c-3.07-1.21-4.28-5.49-2.68-9.55,1.27-3.23,4.06-5.48,6.78-5.48m0-2.31c-3.6,0-7.27,2.7-8.94,6.94-2.06,5.25-.27,10.87,4,12.55a7,7,0,0,0,2.54.48c3.59,0,7.26-2.71,8.93-7,2.06-5.25.28-10.87-4-12.55a6.92,6.92,0,0,0-2.53-.47Z"
      />
      <ellipse
        className="cls-2"
        cx="387.28"
        cy="210.19"
        rx="10.22"
        ry="8.3"
        transform="translate(49.94 493.69) rotate(-68.53)"
      />
      <ellipse
        className="cls-2"
        cx="411.57"
        cy="212.86"
        rx="10.22"
        ry="8.3"
        transform="translate(62.86 517.98) rotate(-68.53)"
      />
      <path className="cls-1" d="M397,208.3s1.3-2.74,5.74,1.1" />
      <path
        className="cls-6"
        d="M750.57,793.38c-42.81,8.86-91.31-4.38-133.26-12.71l-58.68-11.61c-6.37-1.28-13-2.64-18.73-5.44-.27-.21-.55-.44-.81-.67-10.45-9-12.37-24.21-13.58-38q-3.6-41.1-7.22-82.15-4.51-51.51-9-103c-2.05-23.56-3.44-49.59,11-68.34,6.27-8.16,16.8-13.09,26.91-9.44a18.28,18.28,0,0,1,1.74.72l0,0a36.74,36.74,0,0,1,9.21,11.85c12.58,25,9.67,56.51,11.24,83.63,2.85,49.68,1.48,99.36-.11,149.07-.19,5.76-2.62,11.5-2.57,17,0-.79,2.61-1.83,6.8-3,16.59-4.54,58.1-10.86,62.27-11.34a271.56,271.56,0,0,1,105.77,8.56,83.23,83.23,0,0,1,23.81,11.27c8.89,6.11,16.48,14,20,23.14C794.33,776.46,769.92,789.35,750.57,793.38Z"
      />
      <path
        className="cls-6"
        d="M750.57,793.38c-42.81,8.86-91.31-4.38-133.26-12.71l-58.68-11.61c-6.37-1.28-13-2.64-18.73-5.44-.27-.21-.55-.44-.81-.67-10.45-9-12.37-24.21-13.58-38q-3.6-41.1-7.22-82.15-4.51-51.51-9-103c-2.05-23.56-3.44-49.59,11-68.34,6.27-8.16,16.8-13.09,26.91-9.44a18.28,18.28,0,0,1,1.74.72l0,0a36.74,36.74,0,0,1,9.21,11.85c12.58,25,9.67,56.51,11.24,83.63,2.85,49.68,1.48,99.36-.11,149.07-.19,5.76-2.62,11.5-2.57,17,0-.79,2.61-1.83,6.8-3a32.49,32.49,0,0,0-.81,6.68c0-3.91,63.82-13.7,69.05-14.3a271.89,271.89,0,0,1,105.8,8.56,82.91,82.91,0,0,1,17.81,7.55c8.89,6.11,16.48,14,20,23.14C794.33,776.46,769.92,789.35,750.57,793.38Z"
      />
      <path
        className="cls-1"
        d="M512.32,639.12l-9.05-103c-2.07-23.56-3.46-49.6,11-68.35,6.28-8.16,16.79-13.09,26.92-9.44,7.56,2.73,13.36,9.13,17,16.31,12.58,25,9.67,56.53,11.23,83.63,2.86,49.7,1.48,99.37-.12,149.08-.18,5.76-2.62,11.5-2.56,17,0-3.9,63.84-13.7,69.06-14.31a271.8,271.8,0,0,1,105.78,8.56c16.74,4.74,37.31,17.49,43.81,34.41,9,23.46-15.41,36.37-34.76,40.38-42.81,8.88-91.31-4.37-133.26-12.69l-58.68-11.63c-9-1.8-18.54-3.8-25.52-9.82-10.46-9-12.37-24.22-13.58-38Z"
      />
      <path
        className="cls-1"
        d="M429.33,886.66c6.2,11.83,11.91,22.63,16.82,31.84,7.2,13.54,12.73,23.75,15.73,29a5.08,5.08,0,0,0,9.45-2.57V876a10.24,10.24,0,0,0-10.23-10.23,10.13,10.13,0,0,1-9.07-5.53s0,0,0,0a178.72,178.72,0,0,1-12.47-32.14v0"
      />
      <path
        className="cls-1"
        d="M383.42,798.71a615.42,615.42,0,0,0-15-118q-2.19-9.43-4.05-18.19v0"
      />
      <path
        className="cls-1"
        d="M371.45,950h32.24A16.62,16.62,0,0,0,420,936.51c.83-4.38,1.67-8.7,2.48-13q3.6-19,6.85-36.87c3.77-20.66,7.12-40.17,10.2-58.56v0c11.32-68.81,17.8-122.52,20.64-165.54.14-2,.26-4,.4-6,.11-2.17.23-4.3.34-6.41"
      />
      <path
        className="cls-1"
        d="M309.69,651.93c7.2,18.19,13.38,36.77,21.64,54.52,14.9,32,33.6,62.18,52.09,92.26v0a685,685,0,0,1-7.22,125.42l-2.32,1.18-31.19,15.92A4.63,4.63,0,0,0,344.8,950h41"
      />
      <path
        className="cls-1"
        d="M428.72,454.78c-4.71-26.44,9.58-53.57,26.73-78.46"
      />
      <path
        className="cls-1"
        d="M447.21,501v0a.14.14,0,0,1,.05.09c.86,2,1.71,3.93,2.55,5.9a281.13,281.13,0,0,1,11.54,31.77c1.34,4.68,2.5,9.4,3.43,14.19,4.76,24.29,6.45,49.26,6.71,74,0,4.49,0,9-.07,13.49,0,1.39-.05,2.78-.09,4.14l-.17.1c-1.48.88-3,1.71-4.46,2.52l-.93.49q-2.38,1.27-4.86,2.42a124.31,124.31,0,0,1-13.3,5.35c-3.4,1.18-6.88,2.2-10.37,3.1-17,4.37-34.73,5.76-51.81,5.37l-2.36-.07c-6.39-.21-12.66-.67-18.74-1.3a334.58,334.58,0,0,1-54.64-10.62c-11.94-3.35-20-6.31-22.14-7.15l-.6-.21c-6-34.91-7.08-70.29-6.55-98.39,0-.2,0-.41,0-.62.56-27.38,2.69-47.72,3.38-53.8.09-.72.16-1.23.19-1.53s0-.28,0-.32v0a374.2,374.2,0,0,1,12.54-81.12c9.35-34.37,22.89-62.6,37.33-82.71"
      />
      <path
        className="cls-1"
        d="M371.31,303.1c-3.27,9.23-2.49,18.58,12.1,20.8l.66.09c12.66,1.59,21.17-7,30-17.52"
      />
      <path className="cls-1" d="M456.57,274.1A48.08,48.08,0,0,0,433.78,285" />
      <path
        className="cls-1"
        d="M341.41,479.67c-9.08-83.73,26.13-136.12,42.66-155.68"
      />
      <path
        className="cls-1"
        d="M431.38,293c12.45-33.38-17.7-15.15-30-6.77a2.52,2.52,0,0,1-3.28-.61c-5.6-6.51-20.4-19.95-29.82-4-15.73,26.63,14.15,25.31,28.55,16a2.45,2.45,0,0,1,2.82.47C410.48,307.14,423.58,313.93,431.38,293Z"
      />
      <path
        className="cls-1"
        d="M284,489.9s4.36,12.13,29.28,18.89a21.44,21.44,0,0,0,26.48-15.9,69.18,69.18,0,0,0,1.62-13.22s3.49,19.74,14.84,29.12"
      />
      <path className="cls-1" d="M381.32,507.7s2,10-8.31,10.64" />
      <path
        className="cls-1"
        d="M636.85,784.72V895.27a30.53,30.53,0,0,1-19.78,28.58l-40.62,15.28a5.61,5.61,0,0,0,2,10.87h140a5.62,5.62,0,0,0,2-10.88l-43-16.07a30.56,30.56,0,0,1-19.85-28.61V788.68"
      />
      <path
        className="cls-7"
        d="M636.85,784.72V895.27a30.53,30.53,0,0,1-19.78,28.58l-40.62,15.28a5.61,5.61,0,0,0,2,10.87h140a5.62,5.62,0,0,0,2-10.88l-43-16.07a30.56,30.56,0,0,1-19.85-28.61V788.68Z"
      />
      <path
        className="cls-1"
        d="M364.39,290.56c-38.12,15.25-96.12,45.3-163.29,103.25q-6.91,6-13.95,12.33-14.16,12.8-28.77,27.28L137,454.81a5.09,5.09,0,0,0,6.46,7.8l28.75-19.43a7.94,7.94,0,0,1,11.47,2.87,3.61,3.61,0,0,1,.44,1.56c.94,7.48-8,12.29-12.75,16.31-2.09,1.74-4.84,5.08-3.25,7.89,1.28,2.24,4.09,3.21,6.55,3.34,6.33.34,11.57-3.72,16.59-7,5.4-3.59,12.52-19.62,18-23.08,29-18.37,58.41-35.05,90.11-48.27"
      />
      <path className="cls-1" d="M392.61,236.9s4.19-8.39,11.42-1.74" />
      <line className="cls-1" x1="399.91" y1="252.18" x2="390.7" y2="278.67" />
      <ellipse
        className="cls-5"
        cx="419.3"
        cy="144.22"
        rx="44.53"
        ry="12.47"
        transform="matrix(1, -0.04, 0.04, 1, -5.43, 16.87)"
      />
      <ellipse
        className="cls-5"
        cx="419.3"
        cy="144.22"
        rx="34.96"
        ry="5.52"
        transform="translate(-5.43 16.87) rotate(-2.29)"
      />
      <path
        className="cls-5"
        d="M374.8,146c-1.12-4.82,2.76-9.94,5.6-13.4,5.33-6.45-2.71-16.87,5.72-22a3.64,3.64,0,0,1,2-.65,3.21,3.21,0,0,1,2.68,2.09c1.79,4.17-1.09,9.47,3.81,12.14,3.47,1.91,8.42.24,11.47-1.71,4-2.59,5.39-7,6.36-11.44"
      />
      <path
        className="cls-5"
        d="M418.93,109.09a27,27,0,0,0,1.12,4.71c1,10,16.55,12.39,19.43.15.53-2.26.39-6.22,3.1-7.16,2.32-.79,4.78,1.27,5.67,3.3,2.87,6.4-2.66,13.77,5.13,17.87,4.49,2.37,10,9.11,10.41,14.48"
      />
      <ellipse
        className="cls-5"
        cx="414.94"
        cy="102.99"
        rx="6.63"
        ry="8.55"
        transform="matrix(1, -0.04, 0.04, 1, -3.78, 16.66)"
      />
      <line className="cls-1" x1="294.91" y1="949.99" x2="593.99" y2="949.99" />
    </chakra.svg>
  );
};

export default BusinessFinanceWoman;

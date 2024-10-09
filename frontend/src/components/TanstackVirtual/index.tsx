import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

function TanstackVirtual() {
  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: `400px`,
        overflow: 'auto'
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative'
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            Row {virtualItem.index}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TanstackVirtual;
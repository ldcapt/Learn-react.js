import React, {useLayoutEffect, useEffect} from 'react';

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi callback của useEffect

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi callback của useLayoutEffect (sync)
// 5. Render lại UI

const LayoutEffect = () => {
  return (
    <div>
      
    </div>
  );
}

export default LayoutEffect;

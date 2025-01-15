// components/OutlineContainer.tsx

import React from 'react'

type OutlineContainerProps = {
  children: React.ReactNode
}

// export function OutlineContainer({ children }: OutlineContainerProps) {
//   return (
//     <div className="relative border-[8px] border-black rounded-2xl overflow-hidden">
//       {/* 背景層（白底 + 正方形花紋） */}
//       <div className="absolute inset-0 bg-whiteSquares" />

//       {/* 內容層：在背景上方 */}
//       <div className="relative z-10 p-4 md:p-8">
//         {children}
//       </div>
//     </div>
//   )
// }

// export function OutlineContainer({ children }: OutlineContainerProps) {
//     return (
//       <div className="relative border-[8px] border-black rounded-2xl overflow-hidden">
//         {/* 背景層：使用我們定義好的 .bg-whiteSquares */}
//         <div className="absolute inset-0 bg-whiteSquares" />
  
//         {/* 內容層：z-10，讓內容顯示在背景之上 */}
//         <div className="relative z-10 p-6 md:p-8">
//           {children}
//         </div>
//       </div>
//     )
//   }

  export function OutlineContainer({ children }: OutlineContainerProps) {
    return (
      <div className="relative border-[8px] border-black rounded-2xl overflow-hidden">
        {/* 背景層：使用我們定義好的 .bg-whiteSquares */}
        <div className="absolute inset-0 bg-whiteSquares" />
        
        {/* 內容層：z-10，讓內容顯示在背景之上 */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
  
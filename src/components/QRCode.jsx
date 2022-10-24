export default (code) => {
  return (
    <div className="w-[14.25rem] h-[14.25rem] border-4 border-bgbrown rounded-xl m-auto">
     <img src={`{${code}}`} alt="QRcode" />
    </div>
  )
}
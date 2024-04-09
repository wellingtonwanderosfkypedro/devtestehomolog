import { useEffect, useState } from "react";

interface StorageProps {
  key: string
}

export function useStorage({ key }: StorageProps) {
  const [storage, setStorage] = useState("")

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage))
  }, [storage, key])
  const storageItem = JSON?.parse(window.localStorage.getItem(key) || " ");

  
  console.log('');

  return { storage, setStorage, storageItem }
}

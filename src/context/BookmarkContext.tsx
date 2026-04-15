import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkItem {
  id: string;
  title: string;
  image: string;
  rating: string;
}

interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  toggleBookmark: (item: BookmarkItem) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  const toggleBookmark = (item: BookmarkItem) => {
    setBookmarks((prev) => {
      const exists = prev.find((b) => b.id === item.id);
      if (exists) {
        return prev.filter((b) => b.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some((b) => b.id === id);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};

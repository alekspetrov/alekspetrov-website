export const blockFactory = (block, options = { duplicated: false }) => {
  if (block.type === 'code') {
    return {
      id: block.id,
      type: block.type,
      language: block.code.language,
      content: block[block.type].text.map((text) => {
        return {
          text: text.text.content,
        }
      }),
    }
  }

  if (block.type === 'callout') {
    return {
      id: block.id,
      type: block.type,
      icon: block[block.type].icon.emoji,
      content: block[block.type].text.map((text) => {
        return {
          text: text.text.content,
          href: text.text.link?.url,
        }
      }),
    }
  }

  if (block.type === 'quote') {
    return {
      id: block.id,
      type: block.type,
      content: block[block.type].text.map((text) => {
        return {
          text: text.text.content,
          href: text.text.link?.url,
        }
      }),
    }
  }

  if (block.type === 'image') {
    if (block.image?.type === 'external') {
      return {
        id: block.id,
        type: 'image',
        src: block.image.external.url,
        caption: block.image.caption[0]?.text.content || '',
      }
    }

    return {
      id: block.id,
      type: 'image',
      src: block.image.file.url,
      caption: block.image.caption[0]?.text.content || '',
    }
  }

  if (block.type === 'divider') {
    return {
      id: block.id,
      type: 'divider',
    }
  }

  if (block.type === 'bulleted_list_item') {
    return {
      id: block.id,
      type: 'bulleted_list_item',
      content: block[block.type].text.map((item) => {
        return {
          text: item.text.content,
          href: item.text.link?.url,
        }
      }),
    }
  }

  if (block.type === 'heading_3') {
    return {
      id: block.id,
      type: 'heading-3',
      content: block[block.type].text.map((text) => {
        return {
          type: text.type,
          text: text.text.content,
          href: text.href,
        }
      }),
    }
  }

  if (block.type === 'paragraph') {
    return {
      id: block.id,
      type: 'paragraph',
      content: block[block.type].text.map((text) => {
        return {
          text: text.text.content,
          href: text.href,
        }
      }),
    }
  }
}

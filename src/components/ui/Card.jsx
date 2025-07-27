export default function Card({ 
    image, 
    title, 
    subtitle, 
    creator, 
    location, 
    distance,
    rating,
    votes 
  }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center">
            <span className="font-bold">{rating || '0'}</span>
            <img src="/assets/img/star.png" alt="Star" className="h-3 w-3 ml-1" />
            <span className="ml-1 text-xs">{votes || '0'} votes</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg truncate">{title}</h3>
          <p className="text-gray-600 mb-3 truncate">{subtitle}</p>
          
          {creator && (
            <div className="flex items-center mb-3">
              <img 
                src={creator.image} 
                alt={creator.name} 
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-bold truncate">{creator.name}</span>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 truncate max-w-[70%]">{location}</span>
            <a 
              href={`https://maps.google.com?q=${location}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded"
            >
              <img src="/assets/img/map_pins_icon.png" alt="Map" className="h-4 w-4 mr-1" />
              {distance}
            </a>
          </div>
        </div>
      </div>
    );
  }
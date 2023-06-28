import { Variants, motion } from "framer-motion";

const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
    pathOffset: 0,
    fill: "#14141B",
  },
  visible: {
    pathLength: 1,
    pathOffset: 1,
    fill: "#15c196",
  },
};

export function AnimatedLogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150px"
      height="169px"
      viewBox="0 0 150 168"
      version="1.1"
    >
      <defs>
        <clipPath id="clip1">
          <path d="M 30 58.578125 L 120 58.578125 L 120 109.417969 L 30 109.417969 Z M 30 58.578125 " />
        </clipPath>
      </defs>
      <g id="surface1">
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2.5,
          }}
          stroke="#15c196"
          d="M 9.824219 106.035156 L 11.570312 108.210938 L 10.699219 105.382812 C 10.480469 104.078125 8.953125 105.601562 9.824219 106.035156 M 11.789062 104.730469 C 12.445312 105.820312 13.101562 106.90625 13.101562 107.992188 C 13.101562 109.515625 14.410156 110.164062 15.503906 110.601562 C 13.972656 108.863281 13.101562 104.078125 11.789062 104.730469 M 95.632812 12.566406 C 99.34375 12.566406 102.839844 12.132812 106.769531 13 C 116.375 15.390625 124.453125 20.175781 129.914062 26.914062 L 145.195312 51.257812 C 145.851562 57.34375 147.160156 64.082031 146.941406 71.472656 C 148.472656 71.472656 148.253906 69.300781 150 68.867188 C 148.253906 73.214844 147.378906 78.648438 146.941406 84.949219 C 145.851562 81.472656 146.941406 76.257812 147.160156 73.429688 C 145.632812 75.820312 144.761719 74.082031 144.761719 72.996094 C 144.976562 71.257812 144.105469 71.472656 143.449219 70.820312 C 141.046875 68.648438 139.519531 66.257812 137.773438 62.5625 C 138.863281 59.734375 139.082031 55.605469 135.589844 53.433594 C 134.496094 52.78125 133.1875 51.695312 132.53125 49.953125 C 131.660156 47.5625 130.132812 44.738281 130.566406 41.042969 C 130.785156 39.957031 127.292969 43.433594 125.328125 41.910156 C 116.8125 36.042969 108.296875 29.304688 98.035156 23.652344 C 92.578125 23.652344 88.644531 21.695312 86.679688 19.304688 C 84.933594 17.132812 86.246094 14.304688 88.863281 14.089844 C 90.394531 14.089844 92.140625 13.652344 93.449219 14.523438 C 93.667969 13.652344 94.542969 12.566406 95.632812 12.566406 M 74.015625 7.566406 L 74.453125 7.785156 C 76.636719 8.21875 77.730469 11.261719 80.132812 10.175781 C 80.132812 11.699219 80.347656 13.21875 79.914062 14.304688 C 79.257812 16.042969 77.292969 16.042969 75.765625 16.042969 C 61.136719 15.175781 52.621094 21.261719 43.667969 26.476562 C 41.265625 28 38.648438 29.085938 36.679688 31.042969 C 27.292969 39.738281 17.03125 47.78125 14.628906 63.867188 L 12.664062 81.691406 C 12.445312 83.648438 10.261719 85.601562 10.699219 87.996094 L 12.226562 98.644531 C 10.699219 97.125 9.824219 99.082031 10.261719 99.949219 C 10.480469 100.601562 11.355469 102.777344 12.664062 100.820312 C 14.410156 104.078125 16.15625 110.382812 18.558594 113.210938 C 25.980469 121.902344 35.589844 129.730469 43.449219 137.554688 C 45.414062 137.121094 46.945312 137.121094 47.378906 135.816406 C 48.035156 137.121094 46.726562 138.425781 45.632812 138.640625 C 49.125 140.816406 53.058594 142.773438 58.296875 143.207031 C 65.066406 143.640625 71.398438 144.726562 77.292969 146.25 C 80.347656 145.378906 83.40625 144.945312 86.679688 144.726562 C 87.773438 144.726562 88.429688 142.988281 89.738281 142.554688 L 89.957031 140.378906 C 91.265625 142.335938 91.046875 139.726562 90.175781 138.425781 C 91.703125 139.726562 92.140625 140.816406 92.792969 141.683594 C 92.792969 141.03125 94.542969 138.640625 94.542969 141.46875 L 94.976562 138.640625 C 95.632812 138.207031 95.851562 141.03125 96.507812 139.074219 C 97.160156 137.121094 98.472656 138.640625 99.78125 137.988281 C 99.34375 138.859375 99.5625 140.597656 101.089844 139.511719 L 102.839844 137.988281 C 103.929688 140.597656 105.675781 139.511719 106.550781 139.074219 C 116.15625 132.988281 125.765625 125.816406 134.933594 118.644531 L 134.714844 121.46875 L 135.808594 117.992188 C 136.898438 119.078125 137.773438 118.207031 138.210938 117.554688 C 139.519531 115.382812 141.265625 113.210938 144.105469 111.253906 C 140.613281 120.601562 136.464844 127.992188 131.222656 134.078125 L 129.039062 136.683594 C 129.039062 138.207031 128.601562 140.164062 126.855469 140.378906 C 125.984375 140.597656 124.234375 139.945312 122.925781 141.25 C 122.269531 142.117188 124.453125 143.859375 122.707031 142.554688 C 121.179688 141.46875 119.652344 142.554688 117.902344 142.988281 C 116.59375 143.425781 118.777344 144.726562 119.214844 145.597656 C 119.652344 146.464844 120.085938 147.335938 119.871094 148.421875 L 117.46875 145.816406 C 114.628906 147.335938 112.882812 150.164062 110.480469 152.335938 C 109.386719 153.207031 109.824219 154.726562 109.824219 156.03125 C 108.296875 156.03125 106.550781 155.597656 105.675781 156.464844 C 105.023438 157.335938 105.238281 158.640625 105.238281 159.945312 C 103.054688 159.726562 102.839844 156.464844 100.875 157.117188 C 98.910156 157.550781 96.726562 157.769531 94.976562 158.855469 C 96.289062 161.464844 92.792969 159.945312 93.230469 160.378906 C 89.957031 158.421875 87.117188 156.898438 83.625 158.203125 C 76.199219 155.8125 67.03125 156.898438 60.261719 157.769531 C 60.261719 156.683594 60.480469 155.597656 60.042969 155.378906 C 59.605469 156.464844 58.296875 156.03125 58.515625 156.03125 C 54.367188 153.207031 50.21875 151.464844 45.851562 149.074219 C 41.921875 149.511719 38.210938 147.554688 37.117188 146.464844 C 34.0625 143.640625 30.566406 145.164062 27.730469 144.511719 C 21.617188 142.988281 19.433594 136.683594 18.777344 132.335938 C 18.339844 130.164062 16.59375 129.292969 15.9375 129.511719 C 13.101562 120.382812 8.734375 112.121094 5.238281 103.644531 C 4.367188 101.472656 4.585938 99.296875 4.585938 96.90625 C 5.675781 97.339844 6.769531 97.125 6.550781 95.601562 C 5.457031 88.429688 2.839844 82.996094 0 77.777344 C 1.527344 70.386719 1.746094 61.691406 5.238281 55.171875 C 8.296875 49.300781 13.972656 46.257812 17.902344 41.257812 C 19.214844 39.519531 19.214844 37.128906 20.523438 35.609375 C 24.890625 31.261719 29.257812 26.695312 34.0625 22.78125 C 36.246094 21.042969 38.863281 22.78125 42.140625 22.132812 C 43.230469 18.21875 47.597656 14.742188 51.746094 15.828125 C 53.492188 16.261719 56.988281 11.699219 58.078125 11.261719 C 59.824219 10.609375 58.953125 13 58.953125 14.523438 C 63.101562 11.261719 68.777344 9.523438 74.015625 7.566406 "
        />
        <g clipPath="url(#clip1)" clipRule="nonzero">
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              duration: 3,
            }}
            stroke="#15c196"
            d="M 46.015625 108.703125 L 30 108.703125 L 30 103.398438 L 33.667969 102.878906 L 50.335938 58.578125 L 58.804688 58.578125 L 75.261719 102.878906 L 78.929688 103.398438 L 78.929688 108.703125 L 62.925781 108.703125 L 62.925781 103.398438 L 66.523438 102.75 L 63.863281 94.871094 L 45.109375 94.871094 L 42.378906 102.75 L 46.015625 103.398438 Z M 53.933594 69.730469 L 47.390625 88.214844 L 61.609375 88.214844 L 55.066406 69.660156 L 54.628906 68.320312 L 54.414062 68.320312 Z M 98.839844 109.421875 C 95.640625 109.421875 92.800781 108.847656 90.316406 107.699219 C 87.84375 106.554688 85.875 104.804688 84.410156 102.457031 C 82.945312 100.105469 82.144531 97.148438 82.003906 93.585938 L 82.074219 93.390625 L 90.332031 93.390625 C 90.472656 96.71875 91.222656 99.085938 92.582031 100.496094 C 93.941406 101.90625 95.820312 102.609375 98.21875 102.609375 C 99.804688 102.609375 101.164062 102.269531 102.296875 101.582031 C 103.429688 100.886719 104.292969 99.898438 104.890625 98.621094 C 105.492188 97.332031 105.796875 95.796875 105.796875 94.011719 L 105.796875 64.953125 L 99.054688 63.953125 L 99.054688 58.578125 L 120 58.578125 L 120 63.921875 L 114.476562 64.953125 L 114.476562 94.011719 C 114.476562 97.132812 113.875 99.847656 112.679688 102.160156 C 111.480469 104.480469 109.71875 106.273438 107.394531 107.53125 C 105.082031 108.789062 102.230469 109.421875 98.839844 109.421875 Z M 98.839844 109.421875 "
          />
        </g>
      </g>
    </svg>
  );
}
